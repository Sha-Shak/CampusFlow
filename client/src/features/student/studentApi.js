import { apiSlice } from '../api/apiSlice';

export const studentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => ({
        url: `/student/getAllStudents`,
      }),
    }),
    getStudentById: builder.query({
      query: (id) => ({
        url: `/student/${id}`,
      }),
    }),

    createStudent: builder.mutation({
      query: (data) => ({
        url: `/student/createStudent/`,
        method: 'POST',
        body: data,
      }),
    }),

    addSoftTechSkillsByStudentID: builder.mutation({
      query: (data) => ({
        url: `/student/addSoftTechSkillsByID/${data.studentId}`,
        method: 'POST',
        body: data,
      }),
    }),
    getStudentByCohortName: builder.query({
      query: (cohortName) => ({
        url: `/student/getStudentByCohortName/${cohortName}`,
        method: 'GET',
      }),
    }),

    //donebysaimon
    getStudentWeekInfo: builder.query({
      query: (data) => ({
        url: `/student/getStudentWeekInfo/${data.studentId}/${data.week}`,
        method: 'GET',
      }),
    }),

    setStudentWeekInfo: builder.mutation({
      query: (data) => ({
        url: `/student/setStudentWeekInfo/${data.studentId}/${data.week}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useAddSoftTechSkillsByStudentIDMutation,
  useGetStudentByCohortNameQuery,
  useGetStudentWeekInfoQuery,
  useSetStudentWeekInfoMutation,
} = studentApi;
