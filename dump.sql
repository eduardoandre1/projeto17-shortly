--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp without time zone
);


--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tokens (
    user_id integer NOT NULL,
    id integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone NOT NULL
);


--
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    user_id character varying(255) NOT NULL,
    original_url text NOT NULL,
    shorter_url text NOT NULL,
    viens integer DEFAULT 0 NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Users" VALUES (1, 'ewd@gmail.com', '$2b$10$rJQx5U8jjxOckI2gKDP8xeF18eSNSg50x5H0mQ8xWTKgUdhJ0KoZe', 'edu', NULL);


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tokens VALUES (1, 2, '42fa7213-c2be-4d33-a0f9-2250202d0a0d', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 3, '1de75c83-1c9a-4ff7-af72-b1d02229a6a8', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 4, 'f2b8fee2-b977-46d2-9f60-19735ebd50ed', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 5, 'e2cc1cd2-4c9c-4fca-913e-a5fe76e08bdf', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 6, 'de3bcf9c-db98-4b59-9692-92c18c2c9f23', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 7, 'b917fc66-3c15-4efc-8f3f-4a02d7e39e75', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 8, '5a2c0d04-9e74-44ba-976c-63d25da11636', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 9, 'f8b6a69e-2397-4c82-9223-0eff3007dd03', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 10, '1d1f3826-d08c-4991-9256-54ed3a04f99d', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 11, '2185949d-2d05-4959-a063-a12c242e93ba', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 12, 'ae804cbe-97cf-4eff-bde2-ad29d27a9022', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 13, '8e7472d6-f5cf-409b-a7cf-777cecdaaea7', '2023-08-03');
INSERT INTO public.tokens VALUES (1, 14, 'c6e7a866-f359-4bca-834b-d98bcc3ac918', '2023-08-05');
INSERT INTO public.tokens VALUES (1, 15, '2356286d-5994-454b-8f93-349bf9eecddc', '2023-08-05');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, '2023-08-05 12:37:08.113', '15', 'hjsaldui', '7o_5xhY-jz');
INSERT INTO public.urls VALUES (3, '2023-08-05 12:37:21.419', '15', 'hjsaldui2', 'hH0iFfg-9C');
INSERT INTO public.urls VALUES (4, '2023-08-05 12:37:28.488', '15', 'hjsaldui2cx', 'TNc43E4Ipj');
INSERT INTO public.urls VALUES (5, '2023-08-05 12:37:31.522', '15', 'hjsaldui2cxsdf', 'rb3p851WO3');
INSERT INTO public.urls VALUES (7, '2023-08-05 12:51:51.583', '15', 'hjsaldui2cxsdg', 's_twScjpIi');
INSERT INTO public.urls VALUES (8, '2023-08-05 13:02:26.805', '15', 'https://www.google.com/search?channel=fs&client=ubuntu&q=pegar+valores+do+headers+node', '4vJY4KEdds');
INSERT INTO public.urls VALUES (9, '2023-08-05 13:02:43.473', '15', 'https://www.google.com/', 'xqVk651IK7');
INSERT INTO public.urls VALUES (12, '2023-08-05 13:08:37.797', '15', 'https://www.google2.com/', 'NiujGvuCcC');
INSERT INTO public.urls VALUES (15, '2023-08-05 13:10:20.954', '15', 'https://www.google3.com/', 'YjxDN1kGKa');


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Users_id_seq"', 2, true);


--
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tokens_id_seq', 15, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 15, true);


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- Name: urls urls_original_url_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_original_url_key UNIQUE (original_url);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shorter_url_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_shorter_url_key UNIQUE (shorter_url);


--
-- PostgreSQL database dump complete
--

