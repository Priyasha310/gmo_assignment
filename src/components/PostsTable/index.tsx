// PostsTable.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'userId', headerName: 'User ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div style={{height:'90vh', width: '100%', margin:'2rem 0%'}}>
        <Typography variant="h4" align="center" gutterBottom>
            Posts Table
        </Typography>
        <DataGrid rows={posts} columns={columns} />
    </div>
  );
};

export default PostsTable;
