import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';

const Creative = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  console.log(state);
  const [messages, setMessages] = useState(state.evaluation);

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid spacing={2}>
        <Stack direction="row" spacing={1} style={{alignItems:"center", flex:1, marginBottom:20}}>
          <IconButton aria-label="add an alarm" onClick={() => {navigate(-1)}}>
            <ArrowBackIcon />
          </IconButton>
          <Typography gutterBottom variant="h5" component="div">
            Criativo
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          <Grid size={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ aspectRatio: 1 }} image={state.mediaUrl} />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {state.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={8}>
            <MainContainer>
              <ChatContainer>
                <MessageList>
                  {messages.map((item) => (
                    <Message
                      model={{
                        message: item.text,
                        sentTime: item.createAt,
                        position: 'single',
                        direction: item.user._id === 1 ? 'incoming' : 'outgoing',
                      }}
                    />
                  ))}
                </MessageList>
                <MessageInput attachButton="false" placeholder="Escreva sua mensagem" />
              </ChatContainer>
            </MainContainer>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Creative;
