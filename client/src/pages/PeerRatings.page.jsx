import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGetAllCohortStudentsQuery } from '../features/cohort/cohortApi';
import Layout from '../components/Layout';
import DaisyMark from '../components/DaisyMark';
import { Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import { useAddRatingMutation } from '../features/peerRating/peerRatingApi';
import { useSelector } from 'react-redux';

const ratingParameters = [
  {
    title: 'How do you like working with this person',
    name: 'working',
  },
  {
    title: 'Do you personally like this person',
    name: 'like',
  },
  {
    title:
      "How would you rate this person's technical & coding skill and knowledge",
    name: 'technical',
  },
  {
    title: "How would you rate this person's communication skills",
    name: 'communication',
  },
  {
    title: "How would you rate this person's ability to work in a team",
    name: 'team',
  },
];
const myId = '645bb9c27865c6e61157875f';
function PeerRatings() {
  const [cohort, setCohort] = useState('student-nov-2022');
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState('');
  const [rate, setRate] = useState({});
  const { data: cohortStudents, isSuccess: isStudentFetchSuccess } =
    useGetAllCohortStudentsQuery(cohort);
  const [
    addRating,
    { isSuccess: isRatingSuccess, isError: isRatingError, error: ratingError },
  ] = useAddRatingMutation();
  const { user } = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (isStudentFetchSuccess) {
      setStudents(cohortStudents.students);
    }
  }, [isStudentFetchSuccess]);

  useEffect(() => {
    if (isRatingSuccess) {
      toast.success('Rating submitted successfully');
    }
    if (isRatingError) {
      toast.error(ratingError?.data);
    }
  }, [isRatingSuccess, isRatingError]);
  const handleStudentChange = (event) => {
    setStudent(event.target.value);
  };

  const onChange = (event) => {
    const point = +event.target.value;
    setRate((prev) => ({
      ...prev,
      [event.target.name]: point,
    }));
  };

  const submitRating = () => {
    const avgRate = Object.values(rate).reduce((acc, curr) => acc + curr, 0);
    const finalRate = avgRate / Object.values(rate).length;
    id = user?._id;
    const data = {
      id: '645bb9c27865c6e61157875f',
      givenTo: student,
      rate: finalRate,
      description: 'test',
    };
    addRating(data);
    console.log(data);
  };
  console.log(ratingError);
  console.log(rate);

  return (
    <Layout>
      <div className="flex flex-col justify-center gap-2 p-10 bg-white rounded-xl">
        <Toaster />
        <div>
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel>Select Student</InputLabel>
            <Select
              value={student}
              label="Select Student"
              onChange={handleStudentChange}
            >
              {isStudentFetchSuccess &&
                students.map((student, index) => (
                  <MenuItem key={index} value={student?._id}>
                    {student?.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {ratingParameters.map((rating, index) => (
            <div key={index} className="mb-5 text-md">
              <DaisyMark
                onChange={onChange}
                name={rating.name}
                title={rating.title}
                defaultValue={0}
              />
            </div>
          ))}
        </div>

        <Button variant="contained" color="primary" onClick={submitRating}>
          Submit
        </Button>
      </div>
    </Layout>
  );
}

export default PeerRatings;
