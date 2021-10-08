export const alumni = [
  {
    year: '2020 - 2021',
    members: [
      {
        name: 'Vikramaditya Jaisingh',
        role: 'President',
      },
      {
        name: 'Dhruman Gupta',
        role: 'Vice President',
      },
    ],
  },
  {
    year: '2019 - 2020',
    members: [
      {
        name: 'Prithviraj Singh Shahani',
        role: 'Founder, President',
      },
      {
        name: 'Vikramaditya Jaisingh',
        role: 'Vice President',
      },
    ],
  },
]

export const getImagePath = (name) =>
  `${name.toLowerCase().replaceAll(' ', '_')}.jpg`
