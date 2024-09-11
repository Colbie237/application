import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        username: "JohnDoe",
        email: "johndoe@example.com",
        firstName: "John",
        lastName: "Doe",
        bio: "Passionné par les énergies renouvelables.",
        city: "Paris",
        phone: "",
        password: "",
        profilePicture: "default-profile.png", // Photo par défaut
    });

    return (
        <ProfileContext.Provider value={{ profileData, setProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);