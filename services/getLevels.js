const LEVELS = [
  {
    title: "The little prince",
    completed: false,
    points: 10,
    perfect: false,
    image: "/test.svg",
  },
  {
    title: "Hansel and Gretel",
    completed: true,
    points: 0,
    perfect: false,
    image: "/test.svg",
  },
  {
    title: "Red Riding Hood",
    completed: false,
    points: 24,
    perfect: true,
    image: "/test.svg",
  },
  {
    title: "The ugly duckling",
    completed: true,
    points: 1000,
    perfect: true,
    image: "/test.svg",
  },
  {
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
