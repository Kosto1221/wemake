import pkg from "@supabase/supabase-js";
import type { Database } from "~/supa-client";
import { LOCATION_TYPES, JOB_TYPES, SALARY_RANGE } from "./constants";

export const getJobs = async (
  client: pkg.SupabaseClient<Database>,
  {
    limit,
    location,
    type,
    salary,
  }: {
    limit: number;
    location?: string;
    type?: string;
    salary?: string;
  }
) => {
  const baseQuery = client
    .from("jobs")
    .select(
      `
    job_id,
    position,
    overview,
    company_name,
    company_logo,
    company_location,
    job_type,
    location,
    salary_range,
    created_at
    `
    )
    .limit(limit);
  if (location) {
    baseQuery.eq(
      "location",
      location as (typeof LOCATION_TYPES)[number]["value"]
    );
  }
  if (type) {
    baseQuery.eq("job_type", type as (typeof JOB_TYPES)[number]["value"]);
  }
  if (salary) {
    baseQuery.eq("salary_range", salary as (typeof SALARY_RANGE)[number]);
  }
  const { data, error } = await baseQuery;
  if (error) {
    throw error;
  }
  return data;
};

export const getJobById = async (
  client: pkg.SupabaseClient<Database>,
  { jobId }: { jobId: string }
) => {
  const { data, error } = await client
    .from("jobs")
    .select("*")
    .eq("job_id", Number(jobId))
    .single();
  if (error) throw error;
  return data;
};
