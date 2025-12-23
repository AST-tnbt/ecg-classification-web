import type { Beat } from "../components/result/EcgVisualizer"
import apiClient from "./ApiClient"

type BeatDto = {
  status: boolean
  start_time: number
  end_time: number
  label: string
  value: string
}

export type AnalyzeResponse = {
  id: number
  sampling_rate: number
}

export type ResultResponse = {
  signal: number[],
  heartbeats: Beat[],
  next_cursor: number,
  has_more: boolean
}

type AnalyzeParams = {
  heaFile: File
  datFile: File
  step1Model?: string
  step2Model: string
}

export const analyzeApi = async({
  heaFile,
  datFile,
  step1Model = "",
  step2Model
}: AnalyzeParams): Promise<AnalyzeResponse> => {
const formData = new FormData()

  // 🔑 Must match FastAPI parameter names
  formData.append("hea_file", heaFile)
  formData.append("dat_file", datFile)
  formData.append("step1_model", step1Model)
  formData.append("step2_model", step2Model)

  const response = await apiClient.post<AnalyzeResponse>(
    "/analyze",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  )

  return response.data
}

export const resultApi = async (id: string, cursor: number): Promise<ResultResponse> => {
  const response = await apiClient.get(`/analyze/${id}?cursor=${cursor}`)
  return {
    ...response.data,
    heartbeats: response.data.heartbeats.map((b: BeatDto) => ({
      status: b.status,
      startTime: b.start_time,
      endTime: b.end_time,
      label: b.label,
      value: b.value
    }))
  }
}