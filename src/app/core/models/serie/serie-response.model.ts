import { Serie } from "./serie.model"

export interface SerieResponse {
    page: number
    results: Serie[]
    total_pages: number
    total_results: number
  }