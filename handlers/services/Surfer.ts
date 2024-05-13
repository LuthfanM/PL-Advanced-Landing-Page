import { Surfer } from "@/types/surfer";
import axiosInstance from "../api";
import { AxiosResponse } from "axios";

export const getSurfers = async (): Promise<AxiosResponse<Surfer[]>> => {
  return await axiosInstance.get<Surfer[]>("/api/surfers");
};

export const getSurfer = async (id: number): Promise<AxiosResponse<Surfer>> => {
  return await axiosInstance.get<Surfer>(`/api/surfers/${id}`);
};

export const createSurfer = async (
  data: Surfer
): Promise<AxiosResponse<Surfer>> => {
  return await axiosInstance.post<Surfer>("/api/surfers", data);
};

export const updateSurfer = async (
  id: number,
  data: Partial<Surfer>
): Promise<AxiosResponse<Surfer>> => {
  return await axiosInstance.put<Surfer>(`/api/surfers/${id}`, data);
};

export const deleteSurfer = async (
  id: number
): Promise<AxiosResponse<void>> => {
  return await axiosInstance.delete<void>(`/api/surfers/${id}`);
};
