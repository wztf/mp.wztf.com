'use client'
import React from 'react'
import { GrDashboard } from 'react-icons/gr'
import { RiMoneyCnyCircleLine } from 'react-icons/ri'
import { TbUsers } from 'react-icons/tb'

import type { IconType } from 'react-icons'

const renderIcon = (IconComponent: IconType) => React.createElement(IconComponent)

export const constantRouterIcon = {
  GrDashboard: renderIcon(GrDashboard),
  TbUsers: renderIcon(TbUsers),
  RiMoneyCnyCircleLine: renderIcon(RiMoneyCnyCircleLine)
}
