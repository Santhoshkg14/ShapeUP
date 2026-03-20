import { useMemo, useState } from 'react';

const FOOD_DATABASE = [
  { keyword: 'biryani', food: 'Chicken Biryani', caloriesPer100g: 180, protein: 8.8, carbs: 20.4, fat: 6.1 },
  { keyword: 'idli', food: 'Idli + Sambar', caloriesPer100g: 96, protein: 3.2, carbs: 16.5, fat: 1.8 },
  { keyword: 'paneer', food: 'Paneer Curry', caloriesPer100g: 165, protein: 10.2, carbs: 6.7, fat: 10.9 },
  { keyword: 'salad', food: 'Mixed Veg Salad', caloriesPer100g: 55, protein: 2.4, carbs: 7.3, fat: 1.6 },
  { keyword: 'chicken', food: 'Chicken Rice Bowl', caloriesPer100g: 160, protein: 11.1, carbs: 14.2, fat: 6.4 },
];

const INDIAN_MEAL_LIBRARY = {
  'fat-loss': {
    veg: ['Idli + sambar', 'Dal + 2 phulka', 'Curd rice (small bowl)', 'Roasted peanuts + fruit'],
    'non-veg': ['Egg bhurji + millet roti', 'Grilled fish + rice', 'Chicken curry + salad', 'Buttermilk + chana'],
  },
  bulk: {
    veg: ['Paneer paratha + curd', 'Rajma + rice', 'Soyabean pulao', 'Banana shake + nuts'],
    'non-veg': ['Masala omelette + toast', 'Chicken biryani (controlled oil)', 'Mutton curry + rice', 'Peanut chikki + milk'],
  },
};

function calculateMacros(entry, grams) {
  const multiplier = grams / 100;
  return {
    food: entry.food,
    calories: Math.round(entry.caloriesPer100g * multiplier),
    protein: Number((entry.protein * multiplier).toFixed(1)),
    carbs: Number((entry.carbs * multiplier).toFixed(1)),
    fat: Number((entry.fat * multiplier).toFixed(1)),
  };
}

function getOverloadSuggestion({ previousWeight, repsAchieved, targetReps, failedSessions }) {
  if (!previousWeight || !targetReps) {
    return 'Enter your latest set details to generate a recommendation.';
  }

  if (failedSessions >= 3) {
    return `Plateau detected. Run a deload week at ${Math.max(previousWeight * 0.85, 5).toFixed(1)} kg and rebuild.`;
  }

  if (repsAchieved >= targetReps + 2) {
    return `Great performance. Increase to ${(previousWeight + 2.5).toFixed(1)} kg next session.`;
  }

  if (repsAchieved >= targetReps) {
    return `Progress is on track. Try ${(previousWeight + 1.25).toFixed(1)} kg next session.`;
  }

  return `Keep ${previousWeight.toFixed(1)} kg and focus on form + recovery before progressing.`;
}

function predictBodyStats({ currentWeight, calories, workoutDays, goal }) {
  if (!currentWeight || !calories || !workoutDays) {
    return null;
  }

  const baselineCalories = currentWeight * 30;
  const weeklyChangeKg = ((calories - baselineCalories) / 7700) * 7;
  const trainingBoost = workoutDays >= 4 ? 0.08 : 0.03;
  const adjustedWeeklyChange = goal === 'fat-loss' ? Math.min(weeklyChangeKg - trainingBoost, -0.2) : Math.max(weeklyChangeKg + trainingBoost, 0.15);
  const projectedWeight = currentWeight + adjustedWeeklyChange * 12;

  return {
    projectedWeight: Number(projectedWeight.toFixed(1)),
    weeklyChangeKg: Number(adjustedWeeklyChange.toFixed(2)),
    message:
      goal === 'fat-loss'
        ? 'If consistency stays high, visible fat loss and better muscle definition is realistic in 90 days.'
        : 'If sleep and protein are consistent, lean mass gain and strength improvements are realistic in 90 days.',
  };
}

export default function SmartCoach() {
  const [photoFile, setPhotoFile] = useState(null);
  const [portionGrams, setPortionGrams] = useState(250);
  const [foodResult, setFoodResult] = useState(null);

  const [liftData, setLiftData] = useState({
    previousWeight: 60,
    repsAchieved: 10,
    targetReps: 8,
    failedSessions: 0,
  });

  const [predictionInput, setPredictionInput] = useState({
    currentWeight: 78,
    calories: 2200,
    workoutDays: 4,
    goal: 'fat-loss',
  });

  const [adaptiveInput, setAdaptiveInput] = useState({ sleep: 7, soreness: 'low', availableMinutes: 45, missedYesterday: false });
  const [dietInput, setDietInput] = useState({ goal: 'fat-loss', preference: 'veg', budget: 'medium', region: 'South India' });

  const overloadSuggestion = useMemo(() => getOverloadSuggestion(liftData), [liftData]);
  const bodyPrediction = useMemo(() => predictBodyStats(predictionInput), [predictionInput]);

  const adaptivePlan = useMemo(() => {
    if (adaptiveInput.sleep < 5 || adaptiveInput.soreness === 'high') {
      return 'Recovery-first day: 25 min light cardio + mobility + 2 easy full-body circuits.';
    }
    if (adaptiveInput.availableMinutes < 30) {
      return 'Express workout: 4 compound supersets + 8-minute finisher.';
    }
    if (adaptiveInput.missedYesterday) {
      return 'Priority workout: perform yesterday\'s missed session with reduced accessory volume.';
    }
    return 'Standard progressive day: heavy primary lift + accessory hypertrophy blocks.';
  }, [adaptiveInput]);

  const accountabilityMessage = useMemo(
    () => `You benched ${liftData.previousWeight} kg last week. Today, target ${Math.max(liftData.previousWeight + 1.25, 20).toFixed(1)} kg 💪`,
    [liftData.previousWeight],
  );

  const handleFoodScan = () => {
    if (!photoFile) return;
    const name = photoFile.name.toLowerCase();
    const matched = FOOD_DATABASE.find((item) => name.includes(item.keyword)) ?? FOOD_DATABASE[0];
    setFoodResult(calculateMacros(matched, Number(portionGrams)));
  };

  const meals = INDIAN_MEAL_LIBRARY[dietInput.goal][dietInput.preference];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black">ShapeUP Smart Features Lab</h1>
          <p className="text-gray-200 max-w-3xl mx-auto">MVP launchpad for your high-impact ideas: AI food tracking, progressive overload intelligence, transformation forecasting, adaptive workouts, Indian diet planning, and accountability nudges.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <article className="bg-white/10 p-6 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold">🧠 AI Food Photo → Macro Tracker</h2>
            <p className="text-sm text-gray-200">Prototype mode: image filename matching + nutrition estimation. Production integration can call OpenAI Vision + Nutritionix API using the same payload.</p>
            <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files?.[0] || null)} className="block w-full text-sm" />
            <label className="block text-sm">Estimated portion (grams)
              <input type="number" min="50" step="10" value={portionGrams} onChange={(e) => setPortionGrams(e.target.value)} className="mt-2 w-full text-black rounded px-3 py-2" />
            </label>
            <button onClick={handleFoodScan} className="bg-emerald-500 px-4 py-2 rounded font-semibold hover:bg-emerald-600">Analyze meal</button>
            {foodResult && (
              <div className="bg-black/30 p-4 rounded-lg text-sm space-y-1">
                <p><strong>Food:</strong> {foodResult.food}</p>
                <p><strong>Calories:</strong> {foodResult.calories} kcal</p>
                <p><strong>Protein:</strong> {foodResult.protein}g | <strong>Carbs:</strong> {foodResult.carbs}g | <strong>Fat:</strong> {foodResult.fat}g</p>
              </div>
            )}
          </article>

          <article className="bg-white/10 p-6 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold">🏋️ Smart Progressive Overload Engine</h2>
            <div className="grid grid-cols-2 gap-3 text-black">
              {Object.entries(liftData).map(([key, value]) => (
                <label key={key} className="text-sm text-white">{key}
                  <input type="number" min="0" value={value} onChange={(e) => setLiftData((prev) => ({ ...prev, [key]: Number(e.target.value) }))} className="mt-2 w-full rounded px-3 py-2" />
                </label>
              ))}
            </div>
            <p className="bg-black/30 p-3 rounded">{overloadSuggestion}</p>
          </article>

          <article className="bg-white/10 p-6 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold">📊 90-Day Body Transformation Prediction</h2>
            <div className="grid grid-cols-2 gap-3 text-black">
              <label className="text-sm text-white">Current weight (kg)
                <input type="number" value={predictionInput.currentWeight} onChange={(e) => setPredictionInput((prev) => ({ ...prev, currentWeight: Number(e.target.value) }))} className="mt-2 w-full rounded px-3 py-2" />
              </label>
              <label className="text-sm text-white">Daily calories
                <input type="number" value={predictionInput.calories} onChange={(e) => setPredictionInput((prev) => ({ ...prev, calories: Number(e.target.value) }))} className="mt-2 w-full rounded px-3 py-2" />
              </label>
              <label className="text-sm text-white">Workout days/week
                <input type="number" min="1" max="7" value={predictionInput.workoutDays} onChange={(e) => setPredictionInput((prev) => ({ ...prev, workoutDays: Number(e.target.value) }))} className="mt-2 w-full rounded px-3 py-2" />
              </label>
              <label className="text-sm text-white">Goal
                <select value={predictionInput.goal} onChange={(e) => setPredictionInput((prev) => ({ ...prev, goal: e.target.value }))} className="mt-2 w-full rounded px-3 py-2">
                  <option value="fat-loss">Fat loss</option>
                  <option value="bulk">Lean bulk</option>
                </select>
              </label>
            </div>
            {bodyPrediction && (
              <div className="bg-black/30 p-4 rounded space-y-1 text-sm">
                <p><strong>Projected 90-day weight:</strong> {bodyPrediction.projectedWeight} kg</p>
                <p><strong>Weekly trend:</strong> {bodyPrediction.weeklyChangeKg} kg/week</p>
                <p>{bodyPrediction.message}</p>
              </div>
            )}
          </article>

          <article className="bg-white/10 p-6 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold">🧩 Adaptive Workout Generator + Accountability</h2>
            <div className="grid grid-cols-2 gap-3 text-black">
              <label className="text-sm text-white">Sleep (hours)
                <input type="number" min="0" max="12" value={adaptiveInput.sleep} onChange={(e) => setAdaptiveInput((prev) => ({ ...prev, sleep: Number(e.target.value) }))} className="mt-2 w-full rounded px-3 py-2" />
              </label>
              <label className="text-sm text-white">Available minutes
                <input type="number" min="10" max="180" value={adaptiveInput.availableMinutes} onChange={(e) => setAdaptiveInput((prev) => ({ ...prev, availableMinutes: Number(e.target.value) }))} className="mt-2 w-full rounded px-3 py-2" />
              </label>
              <label className="text-sm text-white">Soreness
                <select value={adaptiveInput.soreness} onChange={(e) => setAdaptiveInput((prev) => ({ ...prev, soreness: e.target.value }))} className="mt-2 w-full rounded px-3 py-2">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
              <label className="flex items-end gap-2 text-sm text-white">
                <input type="checkbox" checked={adaptiveInput.missedYesterday} onChange={(e) => setAdaptiveInput((prev) => ({ ...prev, missedYesterday: e.target.checked }))} />
                Missed yesterday&apos;s workout
              </label>
            </div>
            <p className="bg-black/30 p-3 rounded text-sm"><strong>Today:</strong> {adaptivePlan}</p>
            <p className="bg-amber-400/20 border border-amber-300 p-3 rounded text-sm">🔔 {accountabilityMessage}</p>
          </article>

          <article className="bg-white/10 p-6 rounded-xl space-y-4 lg:col-span-2">
            <h2 className="text-2xl font-bold">🍱 Indian Diet Smart Planner + Trainer Marketplace Ready</h2>
            <div className="grid md:grid-cols-4 gap-3 text-black">
              <label className="text-sm text-white">Goal
                <select value={dietInput.goal} onChange={(e) => setDietInput((prev) => ({ ...prev, goal: e.target.value }))} className="mt-2 w-full rounded px-3 py-2">
                  <option value="fat-loss">Fat loss</option>
                  <option value="bulk">Bulk</option>
                </select>
              </label>
              <label className="text-sm text-white">Preference
                <select value={dietInput.preference} onChange={(e) => setDietInput((prev) => ({ ...prev, preference: e.target.value }))} className="mt-2 w-full rounded px-3 py-2">
                  <option value="veg">Veg</option>
                  <option value="non-veg">Non-veg</option>
                </select>
              </label>
              <label className="text-sm text-white">Budget
                <select value={dietInput.budget} onChange={(e) => setDietInput((prev) => ({ ...prev, budget: e.target.value }))} className="mt-2 w-full rounded px-3 py-2">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
              <label className="text-sm text-white">Region
                <input type="text" value={dietInput.region} onChange={(e) => setDietInput((prev) => ({ ...prev, region: e.target.value }))} className="mt-2 w-full rounded px-3 py-2" />
              </label>
            </div>

            <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside">
              {meals.map((meal) => (
                <li key={meal} className="bg-black/25 p-3 rounded">{meal}</li>
              ))}
            </ul>

            <p className="text-sm text-gray-200">Marketplace blueprint: add trainer profiles, plan pricing, and 10–20% platform commission hooks in a future backend milestone.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
