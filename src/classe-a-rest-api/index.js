import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';

import config from './config.js';
import AuthenticationRoutes from './routes/authentication.js';
import UserRoutes from './routes/users.js';
import ClientRoutes from './routes/clients.js';
import PlansRoutes from './routes/plans.js';
import PaymentsRoutes from './routes/payments.js';
import CampaignsRoutes from './routes/campaigns.js';
import PostCreativesRoutes from './routes/postCreatives.js';
import SocialCredentialsRoutes from './routes/socialCredentials.js';

const app = express();
const allowedOrigins = 'http://localhost:3000'; //https://pmv-si-2024-2-pe6-t2-g08-dashboard-1.onrender.com';
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  })
);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', allowedOrigins);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.options('*', cors());
app.use(cookieParser());
app.use(express.json());

app.use('/', AuthenticationRoutes);
app.use('/users', UserRoutes);
app.use('/clients', ClientRoutes);
app.use('/plans', PlansRoutes);
app.use('/payments', PaymentsRoutes);
app.use('/campaigns', CampaignsRoutes);
app.use('/post-creatives', PostCreativesRoutes);
app.use('/social-credentials', SocialCredentialsRoutes);

const swaggerConfig = swaggerJsdoc(config.swaggerOptions);
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.listen(config.port, () => {
  console.log('Server Listening on PORT:', config.port);
});
