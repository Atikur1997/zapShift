import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { userName, user_photoURL, review: message, ratings, delivery_email } = review;

    return (
        <div className="bg-white shadow-md rounded-2xl p-5 md:p-7 border border-gray-100 
                        max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">

            {/* Quote Icon */}
            <FaQuoteLeft className="text-primary text-2xl md:text-3xl mb-4" />

            {/* Message */}
            <p className="text-gray-600 text-sm md:text-base 
                          border-l-4 border-primary pl-4 md:pl-5 mb-5 md:mb-6">
                {message}
            </p>

            {/* Profile Section */}
            <div className="flex items-center gap-3 md:gap-4">

                {/* Avatar */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-secondary">
                    <img
                        src={user_photoURL}
                        alt={userName}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* User Info */}
                <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        {userName}
                    </h3>
                  
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
