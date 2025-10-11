import api from "../apiSlice";
import { PaginatedResponse } from "@/types/paginatedResponse";
import qs from "query-string";
import { QueryParams } from "@/types/query_param";
import { Applicant } from "@/types/applicant";
import { Level } from "@/types/level";

export const applicantsEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getApplicants: builder.query<
      PaginatedResponse<Applicant> | Applicant[],
      QueryParams | void
    >({
      query: (params) => ({
        url: `/applicants/applicants?${qs.stringify(params || {})}`,
        method: "GET",
      }),
      providesTags: (result) => {
        let array = Array.isArray(result) ? result : result?.data;
        return array
          ? [
              ...array.map((applicant) => ({
                type: "Applicant" as const,
                id: applicant.id,
              })),
              { type: "Applicant", id: "LIST" },
            ]
          : [{ type: "Applicant", id: "LIST" }];
      },
    }),
    getApplicant: builder.query<Applicant, { id: string }>({
      query: ({ id }) => ({
        url: `/applicants/applicants/${id}/`,
        method: "GET",
      }),
      providesTags: (res, error, arg) => [{ type: "Applicant", id: arg.id }],
    }),
    applicant: builder.mutation<
      Applicant,
      { data: Partial<Applicant>; method?: string; url?: string }
    >({
      query: ({ data, method, url }) => ({
        url: url || `/applicnats/applicnats/`,
        method: method || "POST",
        data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const response = (await queryFulfilled).data;
          // Invalidate the applicnats LIST tag on successful POST
          dispatch(
            api.util.invalidateTags([
              { type: "Applicant", id: "LIST" },
              { type: "Applicant", id: response.id },
            ])
          );
        } catch {
          // Do nothing if the request fails
        }
      },
    }),
    changeLevel: builder.mutation<
      { message: string; new_level: Level },
      { id: string; action: "promote" | "demote" }
    >({
      query: ({ id, action }) => ({
        url: `/applicants/applicants/${id}/${action}/`,
        method: "GET",
      }),
      invalidatesTags: [{ type: "Applicant", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetApplicantsQuery,
  useGetApplicantQuery,
  useApplicantMutation,
  useChangeLevelMutation,
} = applicantsEndpoints;
