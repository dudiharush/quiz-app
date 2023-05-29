import { useScoresLoader } from "../services/dataLoaders";

export const FinishPage = () => {
  const { scores } = useScoresLoader();
  return (
    <table className="w-full text-xl text-left">
      <thead className="text-xl uppercase text-slate-500">
        <tr>
          <th scope="col">
            User
          </th>
          <th scope="col">
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        {scores.map((score) => (
          <tr>
            <td>{score.userName}</td>
            <td>{score.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
