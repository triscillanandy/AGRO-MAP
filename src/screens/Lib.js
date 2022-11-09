import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider } from "native-base";

export default function Lib() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch("http://192.168.137.1/agromap/showbus.php");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };
console.log("ffffffffffffffffffffffffffffffffff");
console.log(data);
console.log("ffffffffffffffffffffffffffffffffff");

  const renderItem = ({ item }) => {
 
    return (
      <NativeBaseProvider>
    <Center flex={1}>
    <Box> Fetch API</Box>
      {loading && <Box>Loading..</Box>}
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.Business_name.toString()}
        />
      )}
    </Center>
  </NativeBaseProvider>
    );
  };
};