import axios from 'axios'
import { mockPassengers } from '@/data/mockData'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1',
  withCredentials: false,
  timeout: 10000, // เพิ่ม timeout
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPassengers(page: number = 0, size: number = 10): Promise<any> {
    return apiClient.get(`/passenger?page=${page}&size=${size}`)
  },
  getPassenger(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      // ลอง real API ก่อน
      apiClient.get(`/passenger/${id}`)
        .then(resolve)
        .catch(() => {
          // ถ้า API ไม่ทำงาน ใช้ mock data
          const passenger = mockPassengers.find(p => p._id === id)
          if (passenger) {
            resolve({ data: passenger } as any)
          } else {
            reject({ response: { status: 404 } } as any)
          }
        })
    })
  },
  getAirline(id: number): Promise<any> {
    return apiClient.get(`/airlines/${id}`)
  },
}