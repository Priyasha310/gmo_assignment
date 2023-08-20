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
    { field: 'id', headerName: 'ID', flex:0.07, headerClassName: 'header', },
    { field: 'userId', headerName: 'User ID', flex:0.1, headerClassName: 'header', },
    { field: 'title', headerName: 'Title', flex: 0.3, headerClassName: 'header', },
    { field: 'body', headerName: 'Body',flex:0.43, headerClassName: 'header', },
  ];


  return (
    <div style={{height:'100vh', width: '80%', margin:' 0 10%'}} id='#postsTable'>
        <Typography variant="h4" align="center" gutterBottom fontWeight='bold'>
            POSTS TABLE
        </Typography>
        <DataGrid rows={posts} columns={columns} 
        sx={{
          boxShadow: 2,
          '& .MuiDataGrid-cell:hover': {
            overflow:'visible'
          },
          '& .header': {
            backgroundColor: 'white',
          },
          }}/>
    </div>
  );
};

export default PostsTable;
