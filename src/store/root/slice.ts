import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "./initialState";
import {
  IClinic,
  IDoctor,
  IDoctorNearby,
  IScheduling,
  ISpecialtys,
} from "./interfaces";

export const rootSlice = createSlice({
  name: "root",
  initialState: rootInitialState,
  reducers: {
    handleSetDoctors(state, action: PayloadAction<IDoctor[]>) {
      state.doctors = action.payload;
    },
    handleSetSchedules(state, action: PayloadAction<IScheduling[]>) {
      state.schedules = action.payload;
    },
    handleSetNewSchedule(state, action: PayloadAction<IScheduling>) {
      state.schedules.push(action.payload);
    },
    handleCancelSchedule(state, action: PayloadAction<number>) {
      const idToRemove = action.payload;
      const index = state.schedules.findIndex((s) => s.id === idToRemove);
      if (index !== -1) {
        state.schedules.splice(index, 1);
      }
    },
    handleSetDoctorNearby(state, action: PayloadAction<IDoctorNearby[]>) {
      state.doctorsNearby = action.payload;
    },
    handleSetClinics(state, action: PayloadAction<IClinic[]>) {
      state.clinics = action.payload;
    },
    handleSetSpecialtys(state, action: PayloadAction<ISpecialtys[]>) {
      state.specialtys = action.payload;
    },
    handleSetMenu(state, action: PayloadAction<number>) {
      state.menu = action.payload;
    },
  },
});
