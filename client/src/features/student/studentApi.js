import { apiSlice } from '../api/apiSlice';

export const studentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => ({
        url: `/student/getAllStudents`,
      }),
    }),

    getStudentById: builder.query({
      query: (data) => ({
        url: `/student/${data.studentId}`,
        method: 'GET',
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

    changeStudentsType: builder.mutation({
      query: (data) => ({
        url: `/student/changeStudentsType`,
        method: 'PUT',
        body: data,
      }),
    }),
    getStudentType: builder.query({
      query: (id) => ({
        url: `/student/getStudentType/${id}`,
        method: 'GET',
      }),
    }),

    saveAndgetMidEndJuniorCheckpoint: builder.mutation({
      query: (data) => ({
        url: `/student/saveMidEndJuniorData/${data.studentId}`,
        method: 'POST',
        body: data,
      }),
    }),

    getAssessmentMarksByStudentID: builder.query({
      query: (data) => ({
        url: `/student/getAssessmentMarksByStudentID/${data.studentId}`,
        method: 'GET',
      }),
    }),

    getUnitMarksByStudentID: builder.query({
      query: (data) => ({
        url: `/student/getUnitMarksByStudentID/${data.studentId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useAddSoftTechSkillsByStudentIDMutation,
  useGetStudentByIdQuery,
  useGetStudentByCohortNameQuery,
  useGetStudentWeekInfoQuery,
  useSetStudentWeekInfoMutation,
  useChangeStudentsTypeMutation,
  useGetStudentTypeQuery,
  useSaveAndgetMidEndJuniorCheckpointMutation,
  useGetAssessmentMarksByStudentIDQuery,
  useGetUnitMarksByStudentIDQuery,
} = studentApi;
