import { useEffect, useState } from 'react'
import Questions from '../components/Questions'

export default function Home() {
  const [questions, setQuestions] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/admin/questions')
      const json = await response.json()

      if(response.ok) {
        setQuestions(json)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="questions">
        {error && <p>Error fetching data: {error}</p>}
        {questions ? (
          questions.map((question: any) => (
            <Questions key={question.id} question={question} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
