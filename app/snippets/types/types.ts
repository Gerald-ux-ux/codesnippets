export interface Snippet {
  _id: string;
  title: string;
  description: string;
  code: { _id: string; heading: string; language: string; content: string }[];
  author: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    photo: string;
  };
  copy_count: number;
  createdAt: Date;
  updatedAt: Date;
  
}


export interface Code {
    _id: string;
    heading: string;
    language: string;
    content: string;
}

export interface SnippetResponse {
  success: boolean;
  message?: string;
  data?: Snippet[];
}
