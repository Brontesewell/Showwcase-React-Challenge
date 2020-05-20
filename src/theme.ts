export type ColorsKeys = 'black' | 'white' | 'blue' | 'navy'

export interface Theme {
  colors: { [key in ColorsKeys]: string }
}

export const theme: Theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
  },
}


export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}