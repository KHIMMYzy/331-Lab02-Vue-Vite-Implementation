import type { Passenger } from '@/types'

export const mockPassengers: Passenger[] = [
  {
    _id: '1',
    name: 'John Doe',
    trips: 5,
    airline: [
      {
        id: 1,
        name: 'Thai Airways',
        country: 'Thailand',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Thai_Airways_Logo.svg/200px-Thai_Airways_Logo.svg.png',
        slogan: 'Smooth as Silk',
        head_quaters: 'Bangkok, Thailand',
        website: 'https://www.thaiairways.com',
        established: '1960'
      }
    ],
    __v: 0
  },
  {
    _id: '2',
    name: 'Jane Smith',
    trips: 12,
    airline: [
      {
        id: 2,
        name: 'Singapore Airlines',
        country: 'Singapore',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/200px-Singapore_Airlines_Logo_2.svg.png',
        slogan: 'A Great Way to Fly',
        head_quaters: 'Singapore',
        website: 'https://www.singaporeair.com',
        established: '1972'
      }
    ],
    __v: 0
  },
  {
    _id: '3',
    name: 'Mike Wilson',
    trips: 3,
    airline: [
      {
        id: 3,
        name: 'Emirates',
        country: 'UAE',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/200px-Emirates_logo.svg.png',
        slogan: 'Fly Better',
        head_quaters: 'Dubai, UAE',
        website: 'https://www.emirates.com',
        established: '1985'
      }
    ],
    __v: 0
  }
]