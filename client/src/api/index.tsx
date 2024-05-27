const BASE_URL = 'http://localhost:8080/admin';

export const getAllQuestions = async () => {
    const response = await fetch(`${BASE_URL}/questions`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const getQuestionsByLevel = async (level: string) => {
    const response = await fetch(`${BASE_URL}/questions/${level}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Add other CRUD operations similarly...
