import { QuestionModel, UserScoreModel } from "../types/modelTypes"
import { useState, useEffect } from 'react';
import { loadQuiz, loadScores } from "./apiService";

export const useQuizLoader = () => {
    const [question, setQuestion] = useState<QuestionModel>();

    useEffect(()=>{
        const loadData = async () =>{
            const data = await loadQuiz();
            setQuestion(data);
        }
        loadData();
    },[])
    return {question}
}

export const useScoresLoader = () => {
    const [scores, setScores] = useState<UserScoreModel[]>([]);

    useEffect(()=>{
        const loadData = async () =>{
            const data = await loadScores();
            setScores(data);
        }
        loadData();
    },[])
    return {scores}
}