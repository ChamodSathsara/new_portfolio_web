"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Tech icons SVGs
const JavaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className="h-10 w-10"
  >
    <path
      fill="#EA2D2E"
      d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
    ></path>
    <path
      fill="#EA2D2E"
      d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
    ></path>
    <path
      fill="#EA2D2E"
      d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
    ></path>
    <path
      fill="#EA2D2E"
      d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.866 28.42 81.722 22.195 76.491 1.587z"
    ></path>
    <path
      fill="#EA2D2E"
      d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
    ></path>
  </svg>
);

const SpringBootIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <path
      fill="#8bc34a"
      d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"
    ></path>
    <path
      fill="#fff"
      d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"
    ></path>
  </svg>
);

const JavaScriptIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className="h-10 w-10"
  >
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
    <path
      fill="#323330"
      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
    ></path>
  </svg>
);

const ReactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className="h-10 w-10"
  >
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4"></circle>
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <path
      fill="#21a366"
      d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
    ></path>
    <path
      fill="#21a366"
      d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
    ></path>
  </svg>
);

const DotNetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="48"
    height="48"
    viewBox="0 0 48 48"
  >
    <path
      fill="#6a1b9a"
      d="M44,24c0,5.694-2.381,10.831-6.2,14.481l-0.006,0.006C34.2,41.9,29.344,44,24,44 C12.956,44,4,35.044,4,24c0-5.338,2.087-10.188,5.5-13.775c0.006-0.013,0.013-0.019,0.019-0.025C13.169,6.381,18.306,4,24,4 C35.044,4,44,12.956,44,24z"
    ></path>
    <path
      fill="#7b1fa2"
      d="M38.375,37.862c-0.187,0.213-0.381,0.419-0.575,0.619l-0.006,0.006C34.2,41.9,29.344,44,24,44 C12.956,44,4,35.044,4,24c0-5.338,2.087-10.188,5.5-13.775c0.006-0.013,0.013-0.019,0.019-0.025c0.2-0.194,0.406-0.387,0.619-0.575 L38.375,37.862z"
    ></path>
    <path
      fill="#fff"
      d="M8.626,27.281c-0.236,0.004-0.463-0.091-0.625-0.262c-0.167-0.165-0.259-0.39-0.256-0.625 c-0.002-0.234,0.091-0.459,0.256-0.625c0.161-0.174,0.388-0.272,0.625-0.269c0.237-0.001,0.463,0.097,0.625,0.269 c0.169,0.164,0.263,0.39,0.262,0.625c0.002,0.236-0.093,0.462-0.262,0.625C9.087,27.188,8.861,27.283,8.626,27.281z"
    ></path>
    <path
      fill="#fff"
      d="M21.044,27.125h-1.638l-5.856-9.087c-0.146-0.224-0.267-0.463-0.363-0.712h-0.05 c0.056,0.519,0.077,1.041,0.062,1.562v8.237h-1.331V15.731h1.731l5.7,8.925c0.237,0.371,0.392,0.625,0.462,0.763h0.031 c-0.066-0.556-0.093-1.115-0.081-1.675v-8.012h1.331V27.125z"
    ></path>
    <path
      fill="#fff"
      d="M30.057,27.125h-6.056V15.731h5.775v1.206h-4.412v3.788h4.113v1.2h-4.113v3.95h4.7L30.057,27.125z"
    ></path>
    <path
      fill="#fff"
      d="M39.001,16.938h-3.312v10.188h-1.331V16.938h-3.275v-1.206h7.919V16.938z"
    ></path>
    <path
      fill="#f2f2f2"
      d="M20.326,34.875c-0.451,0.219-0.949,0.324-1.45,0.306c-0.674,0.03-1.327-0.232-1.794-0.719 c-0.459-0.514-0.701-1.186-0.675-1.875c-0.034-0.754,0.239-1.489,0.756-2.038c0.505-0.517,1.203-0.798,1.925-0.775 c0.427-0.015,0.853,0.06,1.25,0.219v0.625c-0.382-0.212-0.813-0.319-1.25-0.312c-0.557-0.016-1.094,0.213-1.469,0.625 c-0.39,0.444-0.592,1.022-0.562,1.612c-0.029,0.559,0.159,1.108,0.525,1.531c0.355,0.382,0.86,0.59,1.381,0.569 c0.48,0.013,0.954-0.109,1.369-0.35L20.326,34.875z"
    ></path>
    <path
      fill="#f2f2f2"
      d="M22.882,35.181c-0.503,0.016-0.989-0.187-1.331-0.556c-0.342-0.381-0.519-0.882-0.494-1.394 c-0.032-0.541,0.155-1.073,0.519-1.475c0.371-0.362,0.876-0.555,1.394-0.531c0.49-0.026,0.967,0.163,1.306,0.519 c0.332,0.4,0.5,0.912,0.469,1.431c0.026,0.527-0.156,1.043-0.506,1.438C23.89,34.989,23.395,35.197,22.882,35.181z M22.926,31.762 c-0.348-0.015-0.684,0.13-0.912,0.394c-0.24,0.31-0.36,0.696-0.338,1.088c-0.022,0.38,0.098,0.754,0.338,1.05 c0.231,0.26,0.566,0.402,0.912,0.388c0.34,0.02,0.67-0.118,0.894-0.375c0.227-0.31,0.338-0.691,0.312-1.075 c0.025-0.386-0.086-0.768-0.312-1.081C23.599,31.888,23.268,31.745,22.926,31.762z"
    ></path>
    <path
      fill="#f2f2f2"
      d="M27.663,31.95c-0.135-0.088-0.295-0.13-0.456-0.119c-0.256,0.009-0.49,0.145-0.625,0.363 c-0.186,0.295-0.276,0.64-0.256,0.988v1.912h-0.625v-3.75h0.625v0.781l0,0c0.069-0.242,0.205-0.459,0.394-0.625 c0.163-0.141,0.372-0.219,0.587-0.219c0.121-0.005,0.242,0.012,0.356,0.05V31.95z"
    ></path>
    <path
      fill="#f2f2f2"
      d="M31.326,33.375h-2.644c-0.018,0.349,0.096,0.693,0.319,0.963c0.234,0.234,0.557,0.356,0.887,0.338 c0.424-0.004,0.833-0.152,1.163-0.419v0.562c-0.386,0.255-0.844,0.38-1.306,0.356c-0.472,0.024-0.93-0.164-1.25-0.513 c-0.325-0.406-0.488-0.918-0.456-1.438c-0.022-0.52,0.154-1.03,0.494-1.425c0.313-0.362,0.772-0.564,1.25-0.55 c0.432-0.024,0.851,0.151,1.138,0.475c0.288,0.379,0.43,0.85,0.4,1.325L31.326,33.375z M30.701,32.869 c0.013-0.29-0.076-0.575-0.25-0.806c-0.173-0.196-0.426-0.302-0.688-0.288c-0.272-0.003-0.533,0.108-0.719,0.306 c-0.206,0.218-0.335,0.496-0.369,0.794L30.701,32.869z"
    ></path>
  </svg>
);

// Typing animation component
const TypedText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text eria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-lg md:text-xl font-medium">
                <TypedText text="HEY, I AM CHAMOD SATHSARA" />
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 leading-tight">
                FULL STACK
                <br />
                SOFTWARE
                <br />
                ENGINEER
              </h1>
              <p className="mt-6 text-muted-foreground max-w-2xl">
                I specialize in full-stack web development, with a strong focus
                on the MERN stack and Java programming using Spring Boot. I have
                hands-on experience with JavaScript frameworks like Next.js and
                React.js. I am interested in new web development technologies
                and continuously strive to expand my knowledge. My background
                includes diverse project work that has enhanced my technical
                proficiency, problem-solving skills, teamwork, and communication
                abilities. I'm dedicated to delivering efficient and creative
                software solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Link href="/contact">Hire Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/CV.pdf" target="_blank" download>
                  Download CV <Download size={16} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="animate-float">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href="https://github.com/ChamodSathsara"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link
                    href="https://www.linkedin.com/in/chamodsathsara/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-72 h-96 md:w-auto md:h-auto">
              {/* Profile image */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heroRm-HUjVkqTdJX4mbBKwQAv1gFSq7t95is.webp"
                alt="Profile"
                width={600}
                height={600}
                className="object-contain"
                priority
              />

              {/* Floating tech icons */}
              <motion.div
                className="absolute top-1/4 right-0 md:right-10"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <JavaIcon />
              </motion.div>

              <motion.div
                className="absolute top-1/4 left-0 md:left-10"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <SpringBootIcon />
              </motion.div>

              <motion.div
                className="absolute -top-10 right-0 md:-left-10"
                animate={{ y: [0, -24, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <JavaScriptIcon />
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 right-10 md:right-20"
                animate={{ y: [0, -24, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <DotNetIcon />
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-0 md:left-20"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <ReactIcon />
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 left-0 md:left-10"
                animate={{ y: [0, -24, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <NodeIcon />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
