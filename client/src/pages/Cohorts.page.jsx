import React from 'react';
import CohortItem from '../components/CohortItem.component';
import Layout from '../components/Layout';
import { useGetAllCohortQuery } from '../features/cohort/cohortApi';

function Cohorts() {
  const { data: cohorts, isSuccess } = useGetAllCohortQuery();
  // console.log(cohorts);
  return (
    <Layout>
      <div className="flex flex-wrap justify-around">
        {isSuccess &&
          cohorts.map((cohort, index) => (
            <CohortItem {...cohort} key={index} />
          ))}
      </div>
    </Layout>
  );
}

export default Cohorts;
