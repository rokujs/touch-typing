const LEVELS = [
  {
    level: 1,
    title: "The little prince",
    completed: false,
    points: 10,
    perfect: false,
    image: "/test.svg",
  },
  {
    level: 2,
    title: "Hansel and Gretel",
    completed: true,
    points: 0,
    perfect: false,
    image: "/test.svg",
  },
  {
    level: 3,
    title: "Red Riding Hood",
    completed: false,
    points: 24,
    perfect: true,
    image: "/test.svg",
  },
  {
    level: 4,
    title: "The ugly duckling",
    completed: true,
    points: 1000,
    perfect: true,
    image: "/test.svg",
  },
  {
    level: 5,
    title: "Alice's Adventures in wonderland",
    completed: true,
    points: 3456,
    perfect: true,
    image: "/test.svg",
  }
]

export default async function getLevels() {
  return LEVELS
}
