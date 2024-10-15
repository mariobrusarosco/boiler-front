import { useEffect, useState } from "react";
import "./app.css";
import { PianoKey } from "./components/piano-key";

// Step 1 Piano Key
const KEY_LISTS = ["C", "D", "E", "F", "G", "A", "B"];

const useKeyHistory = (isRecording: boolean) => {
  const [history, setHistory] = useState<string[]>([]);
  const [recordingHistory, setRecordingHistory] = useState<string[]>([]);

  const hasRecordingHistory = recordingHistory.length > 0;

  const handleNewKey = (label: string) => {
    if (isRecording) {
      setRecordingHistory((prev) => [...prev, label]);
    } else {
      setHistory((prev) => [...prev, label]);

      console.log(`Keynote pressed ${label}`);
    }
  };

  useEffect(() => {
    if (!isRecording && hasRecordingHistory) {
      recordingHistory.forEach((key) => {
        setHistory((prev) => [...prev, ...key]);
        console.log(`Keynote pressed ${key}`);
      });

      setRecordingHistory([]);
    }
  }, [isRecording]);

  return {
    history,
    handleNewKey,
  };
};

// Step 2
// A) Dump Comp
// B) Second structure
// Hold normal behavior
// Store the recording
// Identify "Stopping recording"
// Addition recording and clear the rec history

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const { history, handleNewKey } = useKeyHistory(isRecording);

  return (
    <main>
      {KEY_LISTS.map((pianoKey) => {
        return (
          <PianoKey
            key={pianoKey}
            label={pianoKey}
            onInteraction={handleNewKey}
          />
        );
      })}

      <section>
        <h2>History</h2>
        <ul>
          {history.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </section>

      <section>
        record area
        <input
          type="checkbox"
          checked={isRecording}
          onChange={() => {
            setIsRecording((prev) => !prev);
          }}
        />
      </section>
    </main>
  );
};

export default App;
