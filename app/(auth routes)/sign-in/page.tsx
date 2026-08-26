"use client";

import css from "./SignInPage.module.css";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { login, type LoginRequest } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";

export default function SignInPage() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    setError("");

    try {
      const formValues = Object.fromEntries(formData) as LoginRequest;

      const user = await login(formValues);

      setUser(user);
      router.push("/profile");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid email or password");
      }
    }
  };
  const handleFillDemo = () => {
    const form = formRef.current;

    if (!form) return;

    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password",
    ) as HTMLInputElement;

    emailInput.value = "demo.notehub@gmail.com";
    passwordInput.value = "DemoNoteHub123!";
  };
  return (
    <main className={css.mainContent}>
      <form
        ref={formRef}
        className={css.form}
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          handleSubmit(formData);
        }}
      >
        <h1 className={css.formTitle}>Welcome back</h1>

        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
          <button
            type="button"
            className={css.demoButton}
            onClick={handleFillDemo}
          >
            Try Demo Account
          </button>
        </div>

        <p className={css.error}>{error}</p>
      </form>
    </main>
  );
}
