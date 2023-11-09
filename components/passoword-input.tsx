"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "./ui/input";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function PasswordInput(props: InputProps) {
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <div className="relative">
      <Input
        type={passwordShow ? "text" : "password"}
        placeholder="Pa$$w0rd!"
        {...props}
        className="pr-12"
      />
      <span className="absolute inset-y-0 right-3 inline-flex items-center">
        {passwordShow ? (
          <Eye
            className="h-4 w-4 cursor-pointer text-gray-400"
            onClick={() => setPasswordShow((prev) => !prev)}
          />
        ) : (
          <EyeOff
            className="h-4 w-4 cursor-pointer text-gray-900 hover:text-gray-500"
            onClick={() => setPasswordShow((prev) => !prev)}
          />
        )}
      </span>
    </div>
  );
}
