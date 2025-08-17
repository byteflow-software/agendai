type IRootProps = {
  menu: number;
  doctorsNearby: IDoctorNearby[];
  doctors: IDoctor[];
  schedules: IScheduling[];
  clinics: IClinic[];
  specialtys: ISpecialtys[];
};

type ISpecialtys = {
  active: boolean;
  value: string;
};

type IDoctorNearby = {
  id: number;
  imageUrl: string;
  address: string;
  doctor: {
    id: number;
    name: string;
    role: string;
  };
  openingDate: string;
  openingHour: string;
  distance: number;
};

type IScheduling = {
  id: number;
  openingDate: string;
  openingHour: string;
  distance: number;
  imageUrl: string;
  address: string;
  doctor: {
    id: number;
    name: string;
    role: string;
  };
  status: string;
};

type IDoctor = {
  id: number;
  imageUrl: string;
  distance: number;
  address: string;
  doctor: {
    name: string;
    role: string;
  };
  openingDate: string;
  openingHour: string;
  availableDates: [];
  availableHours: [];
};
type IClinic = {
  id: number;
  imageUrl: string;
  name: string;
  specialty: string;
  openingDate: string;
  openingHour: string;
  doctors: number[];
};
export type { IRootProps, IDoctorNearby, IDoctor, IClinic, ISpecialtys, IScheduling };
