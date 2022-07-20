/*
 * Copyright (c) 2016, Zolertia - http://www.zolertia.com
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the Institute nor the names of its contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE INSTITUTE AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE INSTITUTE OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * This file is part of the Contiki operating system.
 *
 */
/*---------------------------------------------------------------------------*/
/**
 * \addtogroup zoul-sensors
 * @{
 *
 * \defgroup zoul-DHT11 DHT11 temperature and humidity sensor
 *
 * Driver for the DHT11 temperature and humidity sensor
 * @{
 *
 * \file
 * Header file for the DHT11 temperature and humidity sensor
 */
/*---------------------------------------------------------------------------*/
#include "lib/sensors.h"
/*---------------------------------------------------------------------------*/
#ifndef DHT11_H_
#define DHT11_H_
/* -------------------------------------------------------------------------- */
/**
 * \name DHT11 default pin and port
 * @{
 */
#ifdef DHT11_CONF_PIN
#define DHT11_PIN        DHT11_CONF_PIN
#else
#define DHT11_PIN        5
#endif
#ifdef DHT11_CONF_PORT
#define DHT11_PORT       DHT11_CONF_PORT
#else
#define DHT11_PORT       GPIO_A_NUM
#endif
/** @} */
/* -------------------------------------------------------------------------- */
/**
 * \name DHT11 available commands
 * @{
 */
#define DHT11_READ_TEMP         0x01
#define DHT11_READ_HUM          0x02
#define DHT11_READ_ALL          0x03
/** @} */
/* -------------------------------------------------------------------------- */
/**
 * \name DHT11 return types
 * @{
 */
#define DHT11_ERROR             (-1)
#define DHT11_SUCCESS           0x00
#define DHT11_BUSY              0xFF
/** @} */
/* -------------------------------------------------------------------------- */
/**
 * \name DHT11 constants
 * @{
 */
#define DHT11_BUFFER            5    /**< Buffer to store the samples         */
#define DHT11_COUNT             8    /**< Minimum ticks to detect a "1" bit   */
#define DHT11_MAX_TIMMING       85   /**< Maximum ticks in a single operation */
#define DHT11_READING_DELAY     1                                 /**< 1 us   */
#define DHT11_READY_TIME        20                                /**< 40 us  */
#define DHT11_START_TIME        (RTIMER_SECOND / 50)              /**< 20 ms  */
#define DHT11_AWAKE_TIME        (RTIMER_SECOND / 4)               /**< 250 ms */
/** @} */
/* -------------------------------------------------------------------------- */
/**
 * \name DHT11 auxiliary functions
 * @{
 */
int DHT11_read_all(int *temperature, int *humidity);
/** @} */
/* -------------------------------------------------------------------------- */
#define DHT11_SENSOR "DHT11 sensor"
/* -------------------------------------------------------------------------- */
extern const struct sensors_sensor DHT11;
/* -------------------------------------------------------------------------- */
#endif /* DHT11_H_ */
/* -------------------------------------------------------------------------- */
/**
 * @}
 * @}
 */
