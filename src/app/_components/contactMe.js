"use client";
import { useState } from "react";
import Contact from "./contact";
import {
  Button,
  createTheme,
  Label,
  Spinner,
  Textarea,
  TextInput,
  Toast,
} from "flowbite-react";
import { APP_URL } from "../_lib/env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";

const customTheme = createTheme({
  textInput: {
    field: {
      input: {
        colors: {
          secondary:
            "bg-card text-textMain border-secondary focus:border-secondary focus:ring-secondary",
        },
      },
    },
  },
  textArea: {
    colors: {
      secondary:
        "bg-card text-textMain border-secondary focus:border-secondary focus:ring-secondary",
    },
  },
});

export default function ContactMe({ contacts }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toastMessage, setToastMessage] = useState(null); // Toast message state
  const [toastType, setToastType] = useState("success"); // Toast type (success or error)
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission logic here

    try {
      const response = await fetch(`${APP_URL}/api/sendmessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      if (response.ok) {
        setToastType("success");
        setToastMessage("Message sent successfully!");
        setTimeout(() => {
          setToastMessage(null);
        }, 5000);
        setEmail("");
        setMessage("");
      } else {
        setToastType("error");
        setToastMessage("Failed to send message.");
      }
    } catch (error) {
      setToastType("error");
      setToastMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex flex-col items-center w-full my-10">
      <h2 className="text-3xl font-semibold text-textMain" id="contact">
        Contact Me
      </h2>
      <form
        className="flex flex-col w-4/5 gap-4 lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="block mb-2 ">
            <Label htmlFor="email" className="text-textMain ">
              Your email
            </Label>
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Your email address"
            required
            theme={customTheme.textInput}
            color="secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="message" className="text-textMain">
              Message
            </Label>
          </div>
          <Textarea
            id="message"
            type="text"
            required
            sizing="lg"
            rows={4}
            theme={customTheme.textArea}
            color={"secondary"}
            placeholder="Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="bg-secondary border-secondary text-textMain hover:!bg-card hover:border-secondary hover:text-textMain"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center">
              <Spinner size="sm" light={true} className="mr-2" />
              Sending...
            </div>
          ) : (
            "Send"
          )}
        </Button>
      </form>
      <div className="grid w-4/5 grid-cols-2 gap-5 mt-10 lg:grid-cols-4">
        {contacts.map((contact) => (
          <Contact
            icon={contact.icon}
            name={contact.name}
            link={contact.link}
            color={contact.color}
            key={`1_${contact.name}`}
          />
        ))}
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed z-50 top-5 right-5">
          <Toast className="bg-gray-800 text-textMuted">
            <div
              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                toastType === "success"
                  ? "bg-green-800 text-green-200"
                  : "bg-red-800 text-red-200"
              }`}
            >
              {toastType === "success" ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                <FontAwesomeIcon icon={faExclamation} />
              )}
            </div>
            <div className="mx-3 text-sm font-normal">{toastMessage}</div>
            <Toast.Toggle
              onClick={() => setToastMessage(null)}
              className="bg-gray-800 text-textMuted hover:bg-gray-700 hover:text-textMain"
            />
          </Toast>
        </div>
      )}
    </section>
  );
}
