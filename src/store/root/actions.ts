import { rootSlice } from "./slice";

export const {
  handleSetDoctors,
  handleSetDoctorNearby,
  handleSetClinics,
  handleSetMenu,
  handleSetSpecialtys,
  handleSetSchedules,
  handleSetNewSchedule,
  handleCancelSchedule
} = rootSlice.actions;
