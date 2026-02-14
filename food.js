import foodData from "./food.json";

export default function handler(req, res) {
  res.status(200).json(foodData);
}
