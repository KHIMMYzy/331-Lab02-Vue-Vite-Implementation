export interface Passenger {
  _id: string
  name: string
  trips: number
  airline: {
    id: number
    name: string
    country: string
    logo: string
    slogan: string
    head_quaters: string
    website: string
    established: string
  }[]
  __v: number
}

export interface Airline {
  id: number
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string
  website: string
  established: string
}