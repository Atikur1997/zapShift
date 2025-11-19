import React from 'react';
import { useForm } from 'react-hook-form';

const SendPercel = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleSendPArcel = (data) => {
        console.log(data);
    }
    return (


        <div className='mt-5'>
            <h2 className="text-5xl font-bold text-secondary">Send a Parcel</h2>
            <p></p>
            <form onSubmit={handleSubmit(handleSendPArcel)}>
                {/* document */}
                <div className='mt-12 p-4'>
                    <label className='label mr-44'>
                        <input type="radio" value="document" {...register("parcelType")} className="radio radio-success" />
                        Document
                    </label>
                    <label className='label'>
                        <input type="radio" value="Non-document" {...register("parcelType")} className="radio radio-success" />
                        Non-Document
                    </label>
                </div>
                {/* parcel info: name , weight */}


                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name:</label>
                        <input type="text" className="input w-full focus:outline-none" {...register("parcelName")} placeholder="parcel name" />
                    </fieldset>

                    {/* parcel Weight  */}
                    <fieldset className="fieldset">
                        <label className="label">Parcel weigth (kg):</label>
                        <input type="number" className="input w-full focus:outline-none" {...register("parcelWeight")} placeholder="parcel weight" />
                    </fieldset>
                </div>


                {/* sender receiver info: name , phone , address */}


                <div className='my-10 grid grid-cols-1 md:grid-cols-2 gap-12'>


                    <div>
                        {/* sender info  */}
                        <h4 className='text-2xl font-semibold text-secondary'>Sender Details</h4>
                        <fieldset className="fieldset">
                            <label className="label">Sender's Name:</label>
                            <input type="text" className="input w-full focus:outline-none" {...register("senderName")} placeholder="Sender's name" />

                            {/* sender address */}
                            <label className="label">Sender's Address:</label>
                            <input type="text" className="input w-full focus:outline-none" {...register("senderAddress")} placeholder="sender address" />

                            {/* sender phone */}
                            <label className="label">Sender's Phone:</label>
                            <input type="text" className="input w-full focus:outline-none" {...register("senderPhone")} placeholder="sender phone" />

                            {/* sender District */}
                            <label className="label">Sender's District:</label>
                            <input type="text" className="input w-full focus:outline-none" {...register("senderDistrict")} placeholder="sender District" />

                            {/* sender's Instruction */}
                            <label className="label">Sender's Instruction:</label>
                            <textarea
                                className="textarea textarea-bordered w-full focus:outline-none"
                                {...register("senderInstruction")}
                                placeholder="Write your instruction here"
                                rows={4}
                            />


                        </fieldset>
                    </div>

                    

                    <div>
                        {/* reciver info */}
                        <h4 className='text-2xl font-semibold text-secondary'>Receiver Details</h4>
                        <fieldset className="fieldset">
                            <label className="label">Receiver's Name:</label>
                            <input type="text" className="input w-full focus:outline-none" {...register("senderName")} placeholder="Receiver's name" />

                            {/* sender address */}
                            <label className="label">Receiver's Address:</label>
                            <input type="text" className="input w-full focus:outline-none" {...register("receiverAddress")} placeholder="Receiver address" />

                            {/* sender phone */}
                            <label className="label">Receiver's Phone:</label>
                            <input type="text" className="input w-full focus:outline-none" {...register("receiverPhone")} placeholder="Receiver phone" />

                            {/* sender District */}
                            <label className="label">Receiver's District:</label>
                            <input type="text" className="input w-full focus:outline-none" {...register("receiverDistrict")} placeholder="Receiver District" />

                            {/* sender's Instruction */}
                            <label className="label">Receiver's Instruction:</label>
                            <textarea
                                className="textarea textarea-bordered w-full focus:outline-none"
                                {...register("receiverInstruction")}
                                placeholder="Write your instruction here"
                                rows={4}
                            />


                        </fieldset>


                    </div>


                </div>

                <input type='submit' className="btn btn-primary text-secondary " value="Submit Now" />
            </form>
        </div>
    );
};

export default SendPercel;