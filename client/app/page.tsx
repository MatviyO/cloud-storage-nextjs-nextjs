"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {getAuthToken} from "@/utils/cookies";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken({ ctx: null });

    if (token) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [router]);

  return null;
}