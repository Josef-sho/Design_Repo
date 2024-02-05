import os
import shutil
import datetime
import schedule

Source_dir = "C:/Users/lenovo/pictures"
destinarion_dir = "C:/Users/lenovo/desktop/backup"

def copy_folder_to_dir(src, dst):
    today = datetime.date.today()
    dest_dir = os.path.join(dst, str(today))


    try:
        shutil.copytree(src, dest_dir)
        print("folder copied successfully")
    except FileExistsError as e:
        print("folder already exists")
    