import { useCallback, useEffect, useMemo, useState } from 'react';

type GetGeolocationCallback = (
  currentCoords: (coords: GeolocationCoordinates) => void
) => void;

export const useGeolocation = () => {
  const isGeolocationAvailable = useMemo(() => 'geolocation' in navigator, []);

  const [hasGeolocationPermission, setHasGeolocationPermission] = useState(true);


  // useEffect(() => {
  //   Notification.requestPermission(function (permission) {
  //     // if (was_questioned) {
  //         console.log("User was asked. New permission is: " + permission);
  //     // }
  //     if ('permissions' in navigator) {
  //     navigator.permissions.query({name:'notifications'}).then(function(notificationPerm) {
  //         notificationPerm.onchange = function() {
  //             console.log("User decided to change his seettings. New permission: " + notificationPerm.state);
  //         };
  //     });
  //     }
  // });
  //   // (async () => {
  //   //   const permissionStatus = await navigator.permissions.query({
  //   //     name: 'geolocation'
  //   //   });
  //   //   console.log(permissionStatus.state);
  //   //   permissionStatus.onchange = () => {
  //   //     console.log(permissionStatus.state);
  //   //   }
  //   // })();
  // }, [])

  (async () => {
    const permissionStatus = await navigator.permissions.query({
      name: 'geolocation'
    });
    permissionStatus.onchange = () => {
      console.log(permissionStatus.state);
    }
  })();
  

  // TODO permission
  const getGeolocation = useCallback<GetGeolocationCallback>(
    (currentCoords) => {
      navigator.geolocation.getCurrentPosition((position) => {
        currentCoords(position.coords);
      }, (err) => {
        console.log(err)
        setHasGeolocationPermission(false)
      });
    },
    []
  );

  return {
    isGeolocationAvailable,
    hasGeolocationPermission,
    getGeolocation,
  };
};
