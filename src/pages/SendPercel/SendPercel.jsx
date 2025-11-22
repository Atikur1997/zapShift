import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();

  const regions = [...new Set(serviceCenters.map((c) => c.region))];
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  const getDistrictsByRegion = (region) => {
    if (!region) return [];
    const filtered = serviceCenters.filter((item) => item.region === region);
    return [...new Set(filtered.map((i) => i.district))];
  };

  const handleSendParcel = (data) => {
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const isDocument = data.parcelType === "document";
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const baseCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = baseCharge + extraCharge;
      }
    }

    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          if (res.data.insertedId) {
            Swal.fire("Success!", "Parcel sent successfully.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="mt-5">
      <h2 className="text-5xl font-bold text-secondary">Send a Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* PARCEL TYPE */}
        <div className="mt-12 p-4">
          <label className="label mr-44">
            <input
              type="radio"
              value="document"
              {...register("parcelType")}
              className="radio radio-success"
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType")}
              className="radio radio-success"
            />
            Non-Document
          </label>
        </div>

        {/* PARCEL NAME & WEIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <fieldset className="fieldset">
            <label className="label">Parcel Name:</label>
            <input
              type="text"
              className="input w-full"
              {...register("parcelName")}
              placeholder="Parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg):</label>
            <input
              type="number"
              className="input w-full"
              {...register("parcelWeight")}
              placeholder="Parcel weight"
            />
          </fieldset>
        </div>

        {/* SENDER & RECEIVER */}
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* SENDER DETAILS */}
          <div>
            <h4 className="text-2xl font-semibold text-secondary">
              Sender Details
            </h4>
            <fieldset className="fieldset">
              <label className="label">Sender's Name:</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender name"
              />

              <label className="label">Sender's Email:</label>
              <input
                type="email"
                defaultValue={user?.email}
                {...register("senderEmail")}
                className="input w-full"
                placeholder="Sender email"
              />

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender's Region</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue=""
                  className="select w-full"
                >
                  <option value="" disabled>
                    Pick a Region
                  </option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender's District</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue=""
                  className="select w-full"
                >
                  <option value="" disabled>
                    Pick a District
                  </option>
                  {getDistrictsByRegion(senderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label">Sender's Address:</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender address"
              />

              <label className="label">Sender's Phone:</label>
              <input
                type="text"
                {...register("senderPhone")}
                className="input w-full"
                placeholder="Sender phone"
              />

              <label className="label">Sender's Instruction:</label>
              <textarea
                {...register("senderInstruction")}
                className="textarea textarea-bordered w-full"
                placeholder="Write your instruction here"
                rows={4}
              />
            </fieldset>
          </div>

          {/* RECEIVER DETAILS */}
          <div>
            <h4 className="text-2xl font-semibold text-secondary">
              Receiver Details
            </h4>
            <fieldset className="fieldset">
              <label className="label">Receiver's Name:</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver name"
              />

              <label className="label">Receiver's Email:</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver email"
              />

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver's Region</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue=""
                  className="select w-full"
                >
                  <option value="" disabled>
                    Pick a Region
                  </option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver's District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue=""
                  className="select w-full"
                >
                  <option value="" disabled>
                    Pick a District
                  </option>
                  {getDistrictsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label">Receiver's Address:</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver address"
              />

              <label className="label">Receiver's Phone:</label>
              <input
                type="text"
                {...register("receiverPhone")}
                className="input w-full"
                placeholder="Receiver phone"
              />

              <label className="label">Receiver's Instruction:</label>
              <textarea
                {...register("receiverInstruction")}
                className="textarea textarea-bordered w-full"
                placeholder="Write your instruction here"
                rows={4}
              />
            </fieldset>
          </div>
        </div>

        {/* SUBMIT */}
        <input
          type="submit"
          className="btn btn-primary text-secondary"
          value="Submit Now"
        />
      </form>
    </div>
  );
};

export default SendParcel;
