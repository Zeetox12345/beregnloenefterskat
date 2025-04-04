import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { calculateTaxAndNet } from "@/utils/taxCalculations";
import { motion } from "framer-motion";

// Job list with monthly salary
const JOBS = [
  { title: "Pilot", grossSalary: 92400 },
  { title: "Dommer", grossSalary: 82300 },
  { title: "Advokat mv.", grossSalary: 71700 },
  { title: "Farmaceut", grossSalary: 69500 },
  { title: "Tandlæge", grossSalary: 66400 },
  { title: "Læge", grossSalary: 64900 },
  { title: "Ingeniør", grossSalary: 60900 },
  { title: "Softwareudvikler", grossSalary: 60800 },
  { title: "Revision og regnskabscontroller", grossSalary: 60500 },
  { title: "Kunderådgivning i den finansielle sektor", grossSalary: 59900 },
  { title: "Dyrlæge", grossSalary: 55800 },
  { title: "Underviser/forsker ved universiteter mv", grossSalary: 54300 },
  { title: "Gymnasielærer", grossSalary: 51900 },
  { title: "Journalist", grossSalary: 51400 },
  { title: "Togfører", grossSalary: 49800 },
  { title: "Psykolog", grossSalary: 49400 },
  { title: "Speditør", grossSalary: 48200 },
  { title: "Regnskabsmedarbejder", grossSalary: 47500 },
  { title: "Bibliotekar", grossSalary: 47300 },
  { title: "Direktionssekretær", grossSalary: 47000 },
  { title: "Jordemoder", grossSalary: 46800 },
  { title: "Mejerist", grossSalary: 46700 },
  { title: "Grundskolelærer", grossSalary: 46100 },
  { title: "VVS'er", grossSalary: 45800 },
  { title: "Sygeplejerske", grossSalary: 45300 },
  { title: "Underviser, erhvervsuddannelser", grossSalary: 44800 },
  { title: "Advokatsekretær", grossSalary: 44600 },
  { title: "Optiker", grossSalary: 44000 },
  { title: "Elektriker", grossSalary: 43800 },
  { title: "Mekaniker (landbrug og industri)", grossSalary: 43400 },
  { title: "Murer", grossSalary: 43400 },
  { title: "Politibetjent", grossSalary: 43300 },
  { title: "Smed", grossSalary: 42000 },
  { title: "Sekretær/kontorarbejde", grossSalary: 41600 },
  { title: "Brandmand", grossSalary: 41200 },
  { title: "Socialrådgiver", grossSalary: 41200 },
  { title: "Tømrer", grossSalary: 41100 },
  { title: "Fysioterapeut mv.", grossSalary: 40400 },
  { title: "Maskinoperatør", grossSalary: 40400 },
  { title: "Automekaniker", grossSalary: 40100 },
  { title: "Specialpædagog", grossSalary: 39900 },
  { title: "Fængselsbetjent", grossSalary: 38700 },
  { title: "Pædagog", grossSalary: 38600 },
  { title: "Renovationsarbejder", grossSalary: 38500 },
  { title: "Lægesekretær", grossSalary: 38000 },
  { title: "Ejendomsinspektør", grossSalary: 37800 },
  { title: "Tandplejer mv.", grossSalary: 37800 },
  { title: "Frisør", grossSalary: 36800 },
  { title: "Maler", grossSalary: 36300 },
  { title: "Lastbilchauffør", grossSalary: 36300 },
  { title: "Kundeservicemedarbejder", grossSalary: 36000 },
  { title: "Sikkerhedsvagt", grossSalary: 35900 },
  { title: "Buschauffør", grossSalary: 35100 },
  { title: "Gartner", grossSalary: 34500 },
  { title: "Postbud mv.", grossSalary: 34400 },
  { title: "Lagerekspedition", grossSalary: 33600 },
  { title: "Bager", grossSalary: 33300 },
  { title: "Kok", grossSalary: 32700 },
  { title: "Slagter-medarbejder mv.", grossSalary: 32100 },
  { title: "Rengøring", grossSalary: 30800 },
  { title: "Fastfood-medarbejder", grossSalary: 30400 },
  { title: "Salgsmedarbejder i butik", grossSalary: 30200 },
  { title: "Tjener", grossSalary: 28300 },
  { title: "Køkkenmedhjælper", grossSalary: 28000 },
  { title: "Kasseassistent", grossSalary: 27700 }
];

// Job with net salary
type JobWithNetSalary = {
  title: string;
  grossSalary: number;
  netSalary: number;
};

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const JobSalaryGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [jobsWithNetSalary, setJobsWithNetSalary] = useState<JobWithNetSalary[]>([]);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [nextJobIndex, setNextJobIndex] = useState(1);
  const [streak, setStreak] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [message, setMessage] = useState("");

  // Calculate net salaries for all jobs
  useEffect(() => {
    const jobsWithNet = JOBS.map(job => {
      const { monthlyNet } = calculateTaxAndNet(job.grossSalary);
      return {
        ...job,
        netSalary: monthlyNet
      };
    });
    
    // Shuffle the jobs
    setJobsWithNetSalary(shuffleArray(jobsWithNet));
  }, []);

  const startGame = useCallback(() => {
    setGameStarted(true);
    setScore(0);
    setCurrentJobIndex(0);
    setNextJobIndex(1);
    setGameOver(false);
    setStreak(0);
    setShowAnswer(false);
    setMessage("");
    
    // Reshuffle jobs
    setJobsWithNetSalary(shuffleArray(jobsWithNetSalary));
  }, [jobsWithNetSalary]);

  const handleGuess = (higherGuess: boolean) => {
    const currentNet = jobsWithNetSalary[currentJobIndex].netSalary;
    const nextNet = jobsWithNetSalary[nextJobIndex].netSalary;
    
    const isHigher = nextNet > currentNet;
    const guessCorrect = (higherGuess && isHigher) || (!higherGuess && !isHigher);
    
    setShowAnswer(true);
    
    if (guessCorrect) {
      const newStreak = streak + 1;
      const newScore = score + 1;
      
      setStreak(newStreak);
      setScore(newScore);
      setMessage(`Rigtigt! ${jobsWithNetSalary[nextJobIndex].title} tjener ${nextNet.toLocaleString("da-DK")} kr efter skat.`);
      
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      
      // Continue after 1.5 seconds
      setTimeout(() => {
        if (nextJobIndex < jobsWithNetSalary.length - 1) {
          setCurrentJobIndex(nextJobIndex);
          setNextJobIndex(nextJobIndex + 1);
          setShowAnswer(false);
          setMessage("");
        } else {
          // Finished all jobs
          setGameOver(true);
          setMessage("Spillet er slut! Du har gået igennem alle jobs.");
        }
      }, 1500);
    } else {
      // Game over
      setStreak(0);
      setGameOver(true);
      setMessage(`Forkert! ${jobsWithNetSalary[nextJobIndex].title} tjener ${nextNet.toLocaleString("da-DK")} kr efter skat.`);
    }
  };

  if (jobsWithNetSalary.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
        <p className="mt-4 text-lg">Indlæser jobdata...</p>
      </div>
    );
  }

  if (!gameStarted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto py-10 px-4 text-center"
      >
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-primary">Hvem tjener mest efter skat?</h2>
          <p className="mb-8 text-lg text-gray-800 font-medium">Gæt om det næste job har højere eller lavere løn efter skat. Se hvor mange rigtige du kan få i træk!</p>
          {highScore > 0 && (
            <div className="mb-8 bg-amber-100 py-3 px-4 rounded-xl inline-block border border-amber-200">
              <p className="font-bold text-amber-900">
                <span className="text-2xl">🏆</span> Din højeste score: {highScore}
              </p>
            </div>
          )}
          <Button 
            onClick={startGame} 
            size="lg" 
            className="w-full sm:w-auto text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all transform hover:scale-105 font-bold text-white"
          >
            Start spillet
          </Button>
        </div>
      </motion.div>
    );
  }

  const currentJob = jobsWithNetSalary[currentJobIndex];
  const nextJob = jobsWithNetSalary[nextJobIndex];

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-primary">Hvem tjener mest efter skat?</h2>
        <div className="flex justify-center items-center gap-8 mb-6">
          <div className="text-lg bg-white shadow-md rounded-full px-5 py-2 border border-gray-100">
            <span className="font-bold text-primary">Score:</span> <span className="font-semibold">{score}</span>
          </div>
          <div className="text-lg bg-white shadow-md rounded-full px-5 py-2 border border-gray-100">
            <span className="font-bold text-primary">Bedste:</span> <span className="font-semibold">{highScore}</span>
          </div>
        </div>
        {streak >= 3 && (
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <span className="inline-block bg-gradient-to-r from-amber-500 to-red-500 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">
              {streak} i træk! 🔥
            </span>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 shadow-md rounded-xl bg-white border-t-4 border-primary">
            <div className="flex flex-col h-full">
              <div className="mb-auto">
                <div className="inline-block px-3 py-1 bg-primary/15 text-primary rounded-md mb-3 text-sm font-bold">Nuværende job</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{currentJob.title}</h3>
                <p className="mb-4 text-xl font-bold text-primary">
                  Løn efter skat: {currentJob.netSalary.toLocaleString("da-DK")} kr
                </p>
              </div>
              <div className="mt-4">
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <Progress value={(currentJobIndex / (jobsWithNetSalary.length - 1)) * 100} className="h-1" />
                </div>
                <p className="text-sm text-gray-700 mt-1 text-right font-medium">Job {currentJobIndex + 1} af {jobsWithNetSalary.length}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 shadow-md rounded-xl bg-white border-t-4 border-primary">
            <div className="flex flex-col h-full">
              <div className="mb-auto">
                <div className="inline-block px-3 py-1 bg-primary/15 text-primary rounded-md mb-3 text-sm font-bold">Næste job</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{nextJob.title}</h3>
                
                {showAnswer ? (
                  <p className="mb-4 text-xl font-bold text-primary">
                    Løn efter skat: {nextJob.netSalary.toLocaleString("da-DK")} kr
                  </p>
                ) : (
                  <p className="mb-4 text-xl font-bold">
                    Løn efter skat: <span className="text-primary font-bold">?</span>
                  </p>
                )}
              </div>

              {!showAnswer && !gameOver && (
                <div className="flex gap-6 mt-4">
                  <Button 
                    onClick={() => handleGuess(false)} 
                    className="flex-1 py-6 h-auto text-lg bg-white border-2 border-red-500 text-red-600 hover:bg-red-50 transition-all font-bold"
                    variant="outline"
                  >
                    <span className="mr-2">👇</span> Lavere
                  </Button>
                  <Button 
                    onClick={() => handleGuess(true)} 
                    className="flex-1 py-6 h-auto text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all font-bold"
                  >
                    <span className="mr-2">☝️</span> Højere
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`p-6 rounded-xl text-center mb-8 shadow-md ${
            gameOver && score > 0 
              ? "bg-amber-50 text-amber-900 border border-amber-200" 
              : gameOver 
              ? "bg-red-50 text-red-900 border border-red-200" 
              : "bg-green-50 text-green-900 border border-green-200"
          }`}
        >
          <p className="font-bold text-lg">{message}</p>
        </motion.div>
      )}

      {gameOver && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-center"
        >
          <Button 
            onClick={startGame} 
            size="lg" 
            className="w-full sm:w-auto text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all transform hover:scale-105 font-bold"
          >
            Spil igen
          </Button>
        </motion.div>
      )}
    </div>
  );
}; 