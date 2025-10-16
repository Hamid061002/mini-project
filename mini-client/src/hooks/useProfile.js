// hooks/useProfile.js
import { useState } from "react";
import { updateProfile } from "../api/profileService";

export const useProfile = (userId) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveProfile = async (profileData) => {
    setLoading(true);
    try {
      const data = await updateProfile(userId, profileData);
      setProfile(data.data);
      return data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { profile, loading, error, saveProfile };
};
