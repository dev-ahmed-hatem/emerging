import api from "../apiSlice";
import { Level } from "@/admin/types/level";

export const levelsEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getLevels: builder.query<Level[], void>({
      query: () => ({
        url: `/applicants/levels/`,
        method: "GET",
      }),
      providesTags: (result) => {
        return result
          ? [
              ...result.map((level) => ({
                type: "Level" as const,
                id: level.id,
              })),
              { type: "Level", id: "LIST" },
            ]
          : [{ type: "Level", id: "LIST" }];
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetLevelsQuery } = levelsEndpoints;
