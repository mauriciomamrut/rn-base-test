import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';

const QueryExample = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    axios({
      method: 'get',
      url: 'https://api.github.com/repos/tannerlinsley/react-query',
    }).then(response => response.data));

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>{`An error has occurred: ${error}`}</Text>;

  return (
    <View>
      <Text>Query Example</Text>
      <Text>
        {data.name}
        :
        {data.description}
      </Text>
      <Text>
        👀
        {data.subscribers_count}
      </Text>
      <Text>
        ✨
        {data.stargazers_count}
      </Text>
      <Text>
        🍴
        {data.forks_count}
      </Text>
    </View>
  );
};

export default QueryExample;
