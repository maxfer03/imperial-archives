import { render } from '@testing-library/react';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { IAppState, IData } from '../interfaces/reduxInterfaces';
import style from './categoryList.module.css'
interface IProps {
  data: IData[];
}