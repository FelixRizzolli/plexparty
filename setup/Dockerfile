FROM python:3.13.0
LABEL authors="felixrizzolli"

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Add Poetry to PATH
ENV PATH="/root/.local/bin:$PATH"

# Set the working directory
WORKDIR /plexparty_setup

# Copy the setup directory contents to the container
COPY . /plexparty_setup

# Install dependencies
RUN poetry install

# Run the script
CMD [ "poetry", "run", "load-data" ]