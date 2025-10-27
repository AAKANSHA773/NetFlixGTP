import {OPENAI_KEY} from "./constant"

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(OPENAI_KEY);

export const geminiModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash"});