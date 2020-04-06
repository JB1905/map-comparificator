import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Map } from 'react-mapkit';

const devToken = `eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Iks2U1VZNjI1RjcifQ.eyJpYXQiOjE1NjAyOTIxNTMuMTYxLCJpc3MiOiJVNEE0WEY3UVJQIn0.mPSIqDGn9hUUByrg7EGo9mZ0nkfOj4Zade0yoJOhdcggGfqT-mXyJ-cMimS8Fy2DBsLsyS4m18ILKigMHLtsyA`;

const AppleMaps: React.FC = () => {
  const coords = useSelector((state: any) => state.maps.coords);

  const dispatch = useDispatch();

  return <Map tokenOrCallback={devToken} center={coords} />;
};

export default AppleMaps;
